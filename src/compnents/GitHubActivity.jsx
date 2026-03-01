import React, { useRef, useState, useCallback } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import "../Layout/App.css";

const GitHubActivity = ({ isMode }) => {
    const [stats, setStats] = useState({ total: 0, currentStreak: 0, longestStreak: 0 });
    const hasComputed = useRef(false);

    const theme = {
        dark: ['#161b22', '#0a3d62', '#1e6ea1', '#3498db', '#58a6ff'],
        light: ['#ebedf0', '#b6d7f8', '#79b8ff', '#2188ff', '#0366d6'],
    };

    const computeStats = useCallback((contributions) => {
        if (hasComputed.current) return contributions;
        hasComputed.current = true;

        const total = contributions.reduce((sum, day) => sum + day.count, 0);

        const sorted = [...contributions].sort((a, b) => b.date.localeCompare(a.date));
        let currentStreak = 0;
        for (const day of sorted) {
            if (day.count > 0) currentStreak++;
            else break;
        }

        let longestStreak = 0;
        let streak = 0;
        const chronological = [...contributions].sort((a, b) => a.date.localeCompare(b.date));
        for (const day of chronological) {
            if (day.count > 0) {
                streak++;
                longestStreak = Math.max(longestStreak, streak);
            } else {
                streak = 0;
            }
        }

        setStats({ total, currentStreak, longestStreak });
        return contributions;
    }, []);

    return (
        <section className="github_activity_section">
            <div className="container-lg px-5">
                <h2 className="github_activity_title">GitHub Activity</h2>
                <div className="github_stats_row">
                    <div className="github_stat_card">
                        <span className="github_stat_value">{stats.total}</span>
                        <span className="github_stat_label">Contributions</span>
                    </div>
                    <div className="github_stat_card">
                        <span className="github_stat_value">{stats.currentStreak}</span>
                        <span className="github_stat_label">Current Streak</span>
                    </div>
                    <div className="github_stat_card">
                        <span className="github_stat_value">{stats.longestStreak}</span>
                        <span className="github_stat_label">Longest Streak</span>
                    </div>
                </div>
                <div className="github_calendar_wrapper">
                    <GitHubCalendar
                        username="iamsheraz"
                        colorScheme={isMode ? "dark" : "light"}
                        theme={theme}
                        blockSize={13}
                        blockMargin={4}
                        blockRadius={3}
                        fontSize={13}
                        showWeekdayLabels
                        transformData={computeStats}
                        errorMessage="Unable to load GitHub activity"
                        labels={{
                            totalCount: '{{count}} contributions in the last year',
                        }}
                        tooltips={{
                            activity: {
                                text: (activity) =>
                                    `${activity.count} contribution${activity.count !== 1 ? 's' : ''} on ${new Date(activity.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`,
                            },
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default GitHubActivity;
