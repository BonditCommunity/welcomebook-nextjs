'use client';
export default function LoadingSplash() {
    return (
      <div className="loading-splash">
        <p>Loading...</p>
        <style jsx>{`
          .loading-splash {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(255, 255, 255, 0.8);
            z-index: 9999;
          }
        `}</style>
      </div>
    );
  }
  