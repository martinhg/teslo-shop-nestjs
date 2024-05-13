import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  create(createFileDto: CreateFileDto) {
    return 'This action adds a new file';
  }
}
