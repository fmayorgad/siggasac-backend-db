import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { ThirdPartyAccounts } from './ThirdPartyAccounts';

@Entity({ name: 'banks' })
export class Bank {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'name', type: 'varchar' })
    name: string;

    @Column({ name: 'code', type: 'varchar', nullable: true })
    code: string;

    @Column({ name: 'state', type: 'smallint', width: 1, default: 1 })
    state: number;

    // relationships
    @OneToMany(
        type => ThirdPartyAccounts,
        schoolProfileUser => schoolProfileUser.accountType
    )
    thirdPartyAccounts: ThirdPartyAccounts[];
}
