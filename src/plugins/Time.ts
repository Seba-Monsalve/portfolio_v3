import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime' 

dayjs.extend(relativeTime)

export const TimeRelative = (date:string) => {
    return dayjs().to(dayjs(date)).replace('ago','');
}