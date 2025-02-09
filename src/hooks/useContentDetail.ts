import {useEffect, useState} from 'react';
import {fetchContentDetail} from '../services/ContentDetailService';
import {Content} from '../types/Content';

export const useContentDetail = (contentType: string, contentId: number) => {
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getContentDetail = async () => {
      if (!contentId) return;
      const data = await fetchContentDetail(contentType, contentId);
      setContent(data);
      setLoading(false);
    };
    getContentDetail();
  }, [contentType, contentId]);

  return {content, loading};
};
