"use client";

export default function ShareButtons({ title }: { title: string }) {
  function shareOn(platform: "whatsapp" | "linkedin") {
    const articleUrl = window.location.href;
    const shareUrl =
      platform === "whatsapp"
        ? `https://wa.me/?text=${encodeURIComponent(`${title} ${articleUrl}`)}`
        : `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="flex flex-wrap gap-3" aria-label="Share this article">
      <button
        type="button"
        onClick={() => shareOn("whatsapp")}
        className="rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900"
      >
        Share on WhatsApp
      </button>
      <button
        type="button"
        onClick={() => shareOn("linkedin")}
        className="rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900"
      >
        Share on LinkedIn
      </button>
    </div>
  );
}
