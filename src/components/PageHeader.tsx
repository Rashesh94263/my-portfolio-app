interface Props {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: Props) => (
  <>
    <p className="pageDescription">{description}</p>
    <h3 className="pageTitle">{title}</h3>
  </>
);

export default PageHeader;
