import { ListItem } from '@/types/BannerListItem';
import React from 'react'

function BannerListItem({ title, content, icon: Icon }: ListItem) {
    return (
        <div className="flex space-x-3">
          <div className="h-10 w-10 bg-secondary rounded-full text-white flex justify-center items-center">
            <Icon size={20} />
          </div>
          <div>
            <h3 className="text-secondary font-semibold">{title}</h3>
            <p className="text-xs text-gray-400">{content}</p>
          </div>
        </div>
      );
}

export default BannerListItem
