import { EntityRepository, Repository } from 'typeorm';
import { Gallery } from './entities/gallery.entity';

@EntityRepository(Gallery)
export class GalleryRepository extends Repository<GalleryRepository> {
  protected tableName = 'gallery';

}