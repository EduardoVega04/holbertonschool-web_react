// npm run test
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('Get current year (number)', () => {
    expect(getFullYear()).toBe(2021);
});

test('Get correct string according parameter (true)', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
});

test('Get correct string according parameter (false)', () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test('Check returned string', () => {
    expect(getLatestNotification().__html).toBe(
        '<strong>Urgent requirement</strong> - complete by EOD'
    );
});
