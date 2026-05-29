export default function Body() {
    return (
        <main>
            {Array.from({ length: 50 }, (_, i) => (
                <p key={i}>hello</p>
            ))}
        </main>
    );
}