function Entry({Entry}) {
    return (
        <div className="entry">
            <img
                src={Entry.image}
                alt="Entry Thumbnail"
                className="entry-thumbnail"
            />
            <h2 className="entry-title">{Entry.title}</h2>
            <p className="entry-content">{Entry.content}</p>
            <footer className="entry-footer">
                <span className="entry-date">Posted on: {Entry.date}</span>
                <span className="entry-author">Author: {Entry.author}</span>
            </footer>
        </div>
    );
}
export default Entry;