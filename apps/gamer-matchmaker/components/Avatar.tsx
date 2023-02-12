import { useEffect, useState } from 'react';
import { Database } from '@/utils/database.types';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

type Profiles = Database['public']['Tables']['profiles']['Row'];

export default function Avatar({
    uid,
    url,
    size,
    onUpload
}: {
    uid?: string,
    url?: Profiles['avatar_url'],
    size: number,
    onUpload: (url: string) => void
}) {
    const supabase = useSupabaseClient<Database>();
    const [avatarUrl, setAvatarUrl] = useState<Profiles['avatar_url']>(url || null);
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        if(url) downloadImage(url)
    }, [url])

    async function downloadImage(path: string) {
        try {
            const { data, error } = await supabase.storage.from('avatars').download(path);
            if(error) {
                throw error;
            }
            const url = URL.createObjectURL(data);
            setAvatarUrl(url);
        } catch(e) {
            console.log('Error downloading image: ', e);
        }
    }

    const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
        try {
            setIsUploading(true);

            if(!e.target.files || e.target.files.length === 0) {
                throw new Error('No file selected');
            }

            const file = e.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${uid}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('avatars')
                .upload(filePath, file, { upsert: true });

            if(uploadError) {
                throw uploadError;
            }

            onUpload(filePath);
        } catch(e) {
            alert('Error uploading avatar!');
        } finally {
            setIsUploading(false);
        }
    }

    return (
        <div>
            {avatarUrl ? (
                <img
                    src={avatarUrl}
                    alt="Avatar"
                    className="avatar image"
                    style={{ height: size, width: size}}
                />
            ) : (
                <div className="avatar no-image" style={{ height: size, width: size}} />
            )}
            <div style={{ width: size }}>
                <label className="button primary block" htmlFor="single">
                    {isUploading ? 'Uploading...' : 'Upload'}
                </label>
                <input
                    style={{
                        visibility: 'hidden',
                        position: 'absolute',
                    }}
                    type="file"
                    id="single"
                    accept="image/*"
                    onChange={uploadAvatar}
                    disabled={isUploading}
                /> 
            </div>
        </div>
    );
}