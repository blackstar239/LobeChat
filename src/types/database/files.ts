import { z } from 'zod';

export const LocalFileSchema = z.object({
  /**
   * create Time
   */
  createdAt: z.number().optional(),
  /**
   * file data array buffer
   */
  data: z.instanceof(ArrayBuffer),
  /**
   * file type
   * @example 'image/png'
   */
  fileType: z.string(),
  /**
   * file name
   * @example 'test.png'
   */
  name: z.string(),
  /**
   * the mode database save the file
   * local mean save the raw file into data
   * url mean upload the file to a cdn and then save the url
   */
  saveMode: z.enum(['local', 'url']),
  /**
   * file size
   */
  size: z.number(),
  /**
   * file url if saveMode is url
   */
  url: z.string().url().optional(),
});

export type LocalFile = z.infer<typeof LocalFileSchema>;
