function timestampDate(timestamp) {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return month + "/" + day + "/" + year;
}

function FormattedDate({ timestamp }) {
  return <div className="date">{timestampDate(timestamp)}</div>;
}

export default FormattedDate;
