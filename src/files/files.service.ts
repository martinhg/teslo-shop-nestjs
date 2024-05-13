import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  create(createFileDto) {
    return 'This action adds a new file';
  }
}
