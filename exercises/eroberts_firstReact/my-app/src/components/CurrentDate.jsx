function currentDate() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    return (
        <div className="current-date">
            <p>Today's Date: {formattedDate}</p>
      </div>
    )
}

export default currentDate