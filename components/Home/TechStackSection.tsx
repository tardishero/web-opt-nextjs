import techstacks from '../../data/techstacks';

const TechStackSection: React.FC = () => {
  return (
    <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 p-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
      {techstacks.map((item) => {
        return (
          <div
            key={item.title}
            className="w-10 mx-auto flex flex-col items-center justify-center"
          >
            <img src={item.icon} alt={item.title} style={item.style} />
            <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TechStackSection;
