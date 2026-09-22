import React, { useState, useEffect, useRef } from 'react';
import { Camera, Trash2 } from 'lucide-react';
import profileDefaultImg from '../assets/adhwaith-profile.jpg';

export default function ProfileVisual({ className = "" }) {
  const [photoSrc, setPhotoSrc] = useState(profileDefaultImg);
  const [imageError, setImageError] = useState(false);
  const fileInputRef = useRef(null);

  // Load photo on mount from localStorage or default bundled image
  useEffect(() => {
    const savedPhoto = localStorage.getItem('adhwaith_custom_photo');
    if (savedPhoto) {
      setPhotoSrc(savedPhoto);
    } else {
      setPhotoSrc(profileDefaultImg);
    }

    const handlePhotoUpdate = () => {
      const updated = localStorage.getItem('adhwaith_custom_photo');
      if (updated) {
        setPhotoSrc(updated);
        setImageError(false);
      }
    };

    window.addEventListener('profile_photo_updated', handlePhotoUpdate);
    return () => window.removeEventListener('profile_photo_updated', handlePhotoUpdate);
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Data = event.target?.result;
        if (typeof base64Data === 'string') {
          localStorage.setItem('adhwaith_custom_photo', base64Data);
          setPhotoSrc(base64Data);
          setImageError(false);
          window.dispatchEvent(new Event('profile_photo_updated'));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (e) => {
    e.stopPropagation();
    localStorage.removeItem('adhwaith_custom_photo');
    setPhotoSrc(profileDefaultImg);
    setImageError(false);
    window.dispatchEvent(new Event('profile_photo_updated'));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const hasRealPhoto = photoSrc && !imageError;

  return (
    <div className={`relative flex items-center justify-center w-full group ${className}`}>
      {/* Hidden File Input for Instant Photo Upload */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileUpload} 
        accept="image/*" 
        className="hidden" 
      />

      {/* Atmospheric Soft Light Behind Large Portrait */}
      <div className="absolute -inset-10 bg-gradient-to-tr from-[#1c2824]/60 via-sapling-400/15 to-transparent rounded-full blur-[130px] opacity-80 pointer-events-none -z-10" />

      {/* Large Blended Portrait Showcase */}
      <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] xl:max-w-[560px] aspect-[3.7/4.7] sm:aspect-[3.8/4.8] overflow-hidden rounded-3xl">
        
        {hasRealPhoto ? (
          <div className="relative w-full h-full">
            {/* The Large Portrait Image */}
            <img 
              src={profileDefaultImg} 
              alt="Adhwaith MV - Digital Marketer" 
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-[center_12%] scale-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Seamless Background Blends */}
            {/* 1. Bottom Gradient Melt into Section Background */}
            <div className="absolute inset-x-0 bottom-0 h-44 sm:h-56 bg-gradient-to-t from-[#060807] via-[#060807]/80 to-transparent pointer-events-none z-10" />

            {/* 2. Left Edge Soft Blend toward Headline Text */}
            <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#060807] via-[#060807]/40 to-transparent pointer-events-none z-10 hidden sm:block" />

            {/* 3. Top Edge Subtle Ambient Fade */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#060807]/50 to-transparent pointer-events-none z-10" />

            {/* 4. Right Edge Soft Blend */}
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#060807]/40 to-transparent pointer-events-none z-10" />
          </div>
        ) : (
          /* Fallback if no photo */
          <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center w-full h-full bg-gradient-to-br from-dark-900 to-dark-950 rounded-3xl border border-sapling-400/20">
            <span className="font-display font-black text-5xl text-gradient-primary">AMV</span>
            <h3 className="text-xl font-bold text-white mt-3 font-display">Adhwaith MV</h3>
            <p className="text-xs text-sapling-400 font-mono mt-1">BSc Mathematics • Digital Marketer</p>
            <button
              onClick={triggerFileInput}
              className="mt-4 px-4 py-2 rounded-xl bg-sapling-400/20 text-sapling-300 border border-sapling-400/30 text-xs font-semibold cursor-pointer"
            >
              Upload Photo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
