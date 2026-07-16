import { toast } from "@heroui/react";

const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

// ========= Upload API functions ==========
export const uploadMultipleImages = async (imageFiles: File[]): Promise<string[]> => {
    try {
        const uploadPromises = imageFiles.map(async (file) => {
            const imgForm = new FormData();
            imgForm.append("image", file);

            const res = await fetch(
                `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY || IMGBB_API_KEY}`,
                {
                    method: "POST",
                    body: imgForm,
                },
            );

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error?.message || "One of the images failed to upload");
            }

            return data.data.url; // সফল হলে সিঙ্গেল ইমেজের URL রিটার্ন করবে
        });

        // Promise.all দিয়ে সবগুলো ফাইল একসাথে প্যারালালি আপলোড হবে
        const imageUrls = await Promise.all(uploadPromises);
        
        return imageUrls; 
        
    } catch (error: unknown) {
        if (error instanceof Error) {
            toast.warning(error.message || "Image upload failed");
        } else {
            toast.warning("An unknown error occurred during image upload");
        }
        return [];
    }
}