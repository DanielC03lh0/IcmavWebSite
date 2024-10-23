export class ChurchEvent {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string[];
    image: string;
    links: { url: string; label: string }[];
  
    constructor(
      title: string,
      date: string,
      time: string,
      location: string,
      description: string[],
      image: string,
      links: { url: string; label: string }[]
    ) {
      this.title = title;
      this.date = date;
      this.time = time;
      this.location = location;
      this.description = description;
      this.image = image;
      this.links = links;
    }
}
  