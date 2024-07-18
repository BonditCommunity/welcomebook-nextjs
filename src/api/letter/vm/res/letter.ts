export interface LetterRes {
    letterId: number;
    photoLetterId?: number;
    imageUrl?: string;
    content: string;
    writer: string;
    createdAt: Date;
    updatedAt: Date;
}
