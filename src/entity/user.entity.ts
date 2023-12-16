import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn() // 자동으로 id를 생성해주는 Annotation
  // @PrimaryColumn() // 모든 테이블에서 존재해야 하는 컬럼이라는 정보를 주기 위해 사용 (직접 추가)
  id: number;

  @Column()
  title: string;

  @CreateDateColumn() // 자동으로 생성 날짜를 생성해주는 Annotation
  createdAt: Date;

  @UpdateDateColumn() // 자동으로 업데이트 날짜를 생성해주는 Annotation
  updatedAt: Date;

  @VersionColumn() // 자동으로 버전을 생성해주는 Annotation
  version: number;

  @Column()
  @Generated('increment')
  aaditionalId: number;
}
