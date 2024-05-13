import { v4 as uuid } from 'uuid';

export const fileNamer = (
  _req: Express.Request,
  file: Express.Multer.File,
  callback: (error: Error, newFileName: string) => void,
) => {
  const fileExtension = file.mimetype.split('/')[1];
  const fileName = `${uuid()}.${fileExtension}`;

  return callback(null, fileName);
};
