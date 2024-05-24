import React from "react";
import styles from "./Skeleton.module.scss";

const Skeleton = () => {
  return (
    <div className={styles.container}>
      <div className="max-w-sm w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="animate-pulse bg-gray-300 h-48 w-full"></div>
        <div className="p-6">
          <div className="animate-pulse bg-gray-400 h-4 w-3/4 mb-4"></div>
          <div className="animate-pulse bg-gray-400 h-4 w-full"></div>
          <div className="flex justify-between items-center mt-8 ">
            <div className="flex items-center">
              <div className="animate-pulse bg-gray-400 h-4 w-10 mr-2"></div>
              <div className="animate-pulse bg-gray-400 h-4 w-16"></div>
            </div>
            <div className="animate-pulse bg-gray-400 h-4 w-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
