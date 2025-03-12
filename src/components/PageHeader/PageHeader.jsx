const PageHeader = ({title}) => {
  return (
    <div className="block items-center justify-center py-4 my-10">
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
  );
};

export default PageHeader;