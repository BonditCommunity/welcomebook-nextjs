import { Entity } from '@/api/common/entity/entity';

export interface College extends Entity {
    name: string;
    shortName: string;
    displayName: string;
    firstDay?: Date;
}
