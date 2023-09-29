import React from "react";

function DetailCard(props: { index: number; color: string }) {
  const [showDetail, setShowDetail] = React.useState<number | null>(null);
  const { index, color } = props;

  console.log(showDetail);

  return (
    <div
      className={`desktopPhoto ${color}`}
      onMouseEnter={() => setShowDetail(index)}
      onMouseLeave={() => setShowDetail(null)}
    >
      {showDetail === index && <div className="detail">Detail</div>}
    </div>
  );
}

export default DetailCard;
