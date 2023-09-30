import React from "react";

type DetailCardProps = {
  color: string;
  stack: string[];
  name: string;
  img: string;
};

function DetailCard(props: { index: number; detail: DetailCardProps }) {
  const [showDetail, setShowDetail] = React.useState<number | null>(null);
  const { index } = props;
  const { color, img, name, stack } = props.detail;

  const styles = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
  };

  return (
    <div
      className={`desktopPhoto ${color}`}
      onMouseEnter={() => setShowDetail(index)}
      onMouseLeave={() => setShowDetail(null)}
      style={styles}
    >
      <h2>{name}</h2>

      {showDetail === index && (
        <div className="detail">
          {stack.map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default DetailCard;
