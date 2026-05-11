export interface Photo {
  url: string;
  title: string;
  location: string;
  category: "Urban" | "Nature" | "Culture";
}

export interface Video {
  videoUrl: string;
  title: string;
  thumbnail: string;
}

export const PHOTOS: Photo[] = [
  {
     url: "images/DSC09228.JPG",
    title: "Kimono",
    location: "Kawagoe",
    category: "Nature",
  },
  {
    
     url: "images/DSC09257.JPG",
    title: "Praweding Kimono",
    location: "Kawagoe",
    category: "Nature",
  },
  {
    url: "images/DSC09073.JPG",
    title: "Omise",
    location: "Tokyo Ginza Koeng",
    category: "Culture",
  },
  {
    url: "images/IMG_5696_jpg.JPG",
    title: "Tokyo Tower",
    location: "Tokyo",
    category: "Culture",
  },
  {
    title: "Station Tokyo",
    location: "Tokyo",
    category: "Urban",
    url: "/images/DSC09277.JPG",
  },
  {
    url: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop",
    title: "Mount Fuji Reflecting",
    location: "Lake Kawaguchi",
    category: "Nature",
  },
  {
    title: "Imperial Palace",
    location: "Tokyo",
    category: "Nature",
    url: "/images/IMG_8146.JPG",
  },
  {
    url: "images/DSC09156.JPG",
    title: "Deer Of Sakura Kawagoe",
    location: "Kawagoe",
    category: "Nature",
  },
  {
    url: "images/DSC09061.JPG",
    title: "Deer of Ginza Koeng",
    location: "Ginza Koeng",
    category: "Nature",
  },
];
export const VIDEOS: Video[] = [
  {
    title: "Matsuri Kawagoe Musim panas",
    thumbnail: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/bQc39JFwryA", // Placeholder video
  },
  {
    title: "Sakura Kawagoe",
    thumbnail: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/gZfBW5axWn4",
  },
];
