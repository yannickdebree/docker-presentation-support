async function main() {
    const { message } = await fetch('http://localhost:3000').then(res => res.json())
    alert(message)
}

main();
