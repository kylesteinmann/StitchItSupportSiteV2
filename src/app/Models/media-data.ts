export class MediaData {
  id?: string;
  type: string;
  brand: string;
  model: string;
  mediaUrl: string;
  mediaType: string;
  mediaTitle: string;
  mediaDescription: string;

  constructor(
    id: string,
    type: string,
    brand: string,
    model: string,
    mediaUrl: string,
    mediaType: string,
    mediaTitle: string,
    mediaDescription: string
  ) {
    this.id = id;
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.mediaUrl = mediaUrl;
    this.mediaType = mediaType;
    this.mediaTitle = mediaTitle;
    this.mediaDescription = mediaDescription;
  }
}
