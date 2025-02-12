import {useEffect, useState} from 'react';
import {fetchContentDetail} from '../services/ContentDetailService';
import {Content} from '../types/Content';
import {ContentType} from '../types/ContentType';

export const useContentDetail = (contentType: ContentType, contentId: number) => {
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getContentDetail = async () => {
      if (!contentId) return;
      try {
        const data = await fetchContentDetail(contentType, contentId);
        setContent(data);
      } catch (error) {
        setContent(null);
        console.error('Error fetching content detail:', error);
      } finally {
        setLoading(false);
      }
    };
    getContentDetail();
  }, [contentType, contentId]);

  return {content, loading};
};
