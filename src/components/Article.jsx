function Article({ title, date = "January 1, 1970", preview, minutes }) {
    let readingEmoji;

    if (minutes < 30) {
        readingEmoji = "☕️".repeat(Math.ceil(minutes / 5));
    } else {
        readingEmoji = "🍱".repeat(Math.ceil(minutes / 10));
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{readingEmoji} {minutes} min read</p>
        </article>
    );
}


export default Article;