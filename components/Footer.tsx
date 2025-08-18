import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100 border-t">
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold text-gray-700 mb-2">SAU Book Hub</span>
        <p className="text-gray-500 text-sm mb-2">
          ชุมชนคนรักการอ่าน แชร์รีวิวหนังสือดีๆ และพบเพื่อนใหม่สายอ่าน
        </p>
        <div className="text-xs text-gray-400 text-center">
          Create by Sirasak &copy; 2025 | SAU Book Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
