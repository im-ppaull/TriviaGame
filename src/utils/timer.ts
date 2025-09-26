const padStart = (num: number) => String(num).padStart(2, "0");

// Calculate time to Wednesday
export const calculateTimeToLeft = () => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // sunday = 0, monday = 1, tuesday = 2 ...

    const targetDay = Number(import.meta.env.VITE_PLAY_DAY) ?? 3;

    let untilDays = (targetDay - dayOfWeek + 7) % 7; // Set to wednesday or fetch from env

    const target = new Date(now);
    target.setDate(now.getDate() + untilDays);

    const targetHour = Number(import.meta.env.VITE_PLAY_HOUR) ?? 18; // Set to 18 hours (18:00) or fetch from env

    target.setHours(targetHour, 0, 0, 0); 

    if (target.getTime() <= now.getTime()) {
        target.setDate(target.getDate() + 7);
    }

    const diff = target.getTime() - now.getTime();

    return {
        days: padStart(Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: padStart(Math.floor((diff / (1000 * 60 * 60)) % 24)),
        minutes: padStart(Math.floor((diff / (1000 * 60)) % 60)),
        seconds: padStart(Math.floor((diff / 1000) % 60)),
    };
}