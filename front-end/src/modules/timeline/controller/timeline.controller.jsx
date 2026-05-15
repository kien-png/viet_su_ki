import { getTimelinePeriods } from '../model/timeline.service';
import { TimelineView } from '../view/timeline.view';

export function TimelineController() {
  const periods = getTimelinePeriods();

  return <TimelineView periods={periods} />;
}
