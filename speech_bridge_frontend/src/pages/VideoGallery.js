import React, { useState } from "react";
import "./VideoGallery.css";

// Example videos:
const VIDEO_DATA = [
  {
    id: 1,
    title: "Introduction to Speech Therapy",
    url: "https://www.youtube.com/embed/-5C_oh5fw1w",
    type: "free",
    description: "A basic introduction for parents to speech therapy concepts."
  },
  {
    id: 2,
    title: "Building Early Words (Ages 1-2)",
    url: "https://www.youtube.com/embed/lvwl1SkN5w0",
    type: "free",
    description: "How to encourage first words in toddlers."
  },
  {
    id: 3,
    title: "S Blends Therapy Session (Premium)",
    url: "https://www.youtube.com/embed/C2G5WafKnpI",
    type: "paid",
    stripePriceId: "price_1LXy4nJVm...",
    description: "Premium guided practice for older children."
  },
  {
    id: 4,
    title: "Following Directions Activity",
    url: "https://www.youtube.com/embed/fmWgGQ_Yb-Q",
    type: "free",
    description: "DIY activities to improve listening."
  },
  {
    id: 5,
    title: "Advanced Fluency Exercises (Premium)",
    url: "https://www.youtube.com/embed/jB43mlKljWM",
    type: "paid",
    stripePriceId: "price_1LXy7bWpq...",
    description: "Stuttering/fluency management session."
  }
];

// PUBLIC_INTERFACE
function VideoGallery() {
  /**
   * Gallery of videos with free/paid distinction; paid prompt for Stripe.
   */
  const [unlockedVideos, setUnlockedVideos] = useState([1, 2, 4]);
  const [showPaymentPrompt, setShowPaymentPrompt] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  // PUBLIC_INTERFACE
  const handleView = (video) => {
    if (video.type === "paid" && !unlockedVideos.includes(video.id)) {
      setCurrentVideo(video);
      setShowPaymentPrompt(true);
    }
  };

  // PUBLIC_INTERFACE
  const handlePaymentSuccess = (videoId) => {
    setUnlockedVideos([...unlockedVideos, videoId]);
    setShowPaymentPrompt(false);
    setCurrentVideo(null);
  };

  return (
    <section className="sb-videos-page">
      <h1>Therapy Videos</h1>
      <div className="sb-video-grid">
        {VIDEO_DATA.map(video => (
          <div key={video.id} className="sb-video-card">
            <div className="sb-video-thumb">
              <iframe
                src={video.url}
                title={video.title}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width="100%"
                height="160"
                style={{ borderRadius: "8px", filter: video.type === "paid" && !unlockedVideos.includes(video.id) ? "blur(6px) grayscale(0.4)" : "none" }}
              />
              {video.type === "paid" && !unlockedVideos.includes(video.id) && (
                <div className="sb-video-lock">
                  <button className="sb-btn sb-btn-vid" onClick={() => handleView(video)}>
                    Unlock with Payment
                  </button>
                  <div className="sb-vid-premium">Premium</div>
                </div>
              )}
            </div>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
      {showPaymentPrompt && (
        <div className="sb-video-payment-modal">
          <div className="sb-video-payment-content">
            <h2>Unlock: {currentVideo?.title}</h2>
            <p>This content is premium. A payment is required to view.</p>
            {/* Stripe payment: Show real button here */}
            <button
              onClick={() => handlePaymentSuccess(currentVideo.id)}
              className="sb-btn sb-btn-main"
            >
              Simulate Payment Success
            </button>
            <button
              onClick={() => setShowPaymentPrompt(false)}
              className="sb-btn"
              style={{ marginLeft: 10 }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
export default VideoGallery;
