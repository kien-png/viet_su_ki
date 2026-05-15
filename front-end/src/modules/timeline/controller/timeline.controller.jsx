import { useEffect, useState } from 'react';
import { getTimelinePeriods } from '../model/timeline.service';
import { TimelineView } from '../view/timeline.view';

export function TimelineController() {
  const [periods, setPeriods] = useState([]);

  useEffect(() => {
    let active = true;

    getTimelinePeriods()
      .then((data) => {
        if (active) {
          setPeriods(data);
        }
      })
      .catch(() => {
        if (active) {
          setPeriods([]);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return <TimelineView periods={periods} />;
}
