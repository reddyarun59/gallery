export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/9a159dcc-fee9-40c2-83aa-7f1a0ce3c096-cuqaqi.jpg",
    "https://utfs.io/f/6d7f4c3f-fe74-4c0a-b27a-50b7038d46c0-ndtbej.jpg",
    "https://utfs.io/f/55a8de4b-5e5f-488c-926b-f9e60cd36c45-j935nn.jpg",
    "https://utfs.io/f/f26e0600-cf0a-4c8a-bac2-d780ff080d5c-wmfdh1.jpg",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
