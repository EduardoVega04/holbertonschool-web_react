// npm run test
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe('getFullYear()', () => {
    it('Returns the current year as a number', () => {
        expect(getFullYear()).toBe(2021);
    });
});

describe('getFooterCopy()', () => {
    it('Get correct string according parameter (true)', () => {
        expect(getFooterCopy(true)).toBe("Holberton School");
    });
});

describe('getFooterCopy()', () => {
    it('Get correct string according parameter (false)', () => {
        expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    });
});

describe('getLatestNotification()', () => {
    it('Check returned string', () => {
        expect(getLatestNotification().__html).toBe(
            '<strong>Urgent requirement</strong> - complete by EOD'
        );
    });
});
