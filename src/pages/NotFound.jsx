function NotFound() {
    return (
        <div className="bg-[#151515] text-white min-h-screen flex flex-col items-center justify-center text-center p-8">

            <h1 className="text-8xl font-bold text-red-600 mb-4">
                404
            </h1>

            <h2 className="text-3xl font-bold mb-3">
                Page Not Found
            </h2>

            <p className="text-gray-400 mb-8">
                Sorry, the page you're looking for doesn't exist.
            </p>

            <a
                href="/"
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-bold"
            >
                Back to Home
            </a>

        </div>
    )
}

export default NotFound