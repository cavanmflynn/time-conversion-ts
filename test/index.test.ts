import { expect } from 'chai';
import { Time, TimeUnit } from '../src';

describe('Time', () => {
  it('converts days to milliseconds', () => {
    expect(Time.toMilliseconds(2, TimeUnit.Days)).to.equal(86400 * 2 * 1000);
  });

  it('converts hours to milliseconds', () => {
    expect(Time.toMilliseconds(2, TimeUnit.Hours)).to.equal(3600 * 2 * 1000);
  });

  it('converts minutes to milliseconds', () => {
    expect(Time.toMilliseconds(2, TimeUnit.Minutes)).to.equal(60 * 2 * 1000);
  });

  it('converts seconds to milliseconds', () => {
    expect(Time.toMilliseconds(2, TimeUnit.Seconds)).to.equal(2 * 1000);
  });

  it('converts milliseconds to milliseconds', () => {
    expect(Time.toMilliseconds(2, TimeUnit.Milliseconds)).to.equal(2);
  });

  it('converts milliseconds to days', () => {
    expect(Time.fromMilliseconds(86400 * 2 * 1000, TimeUnit.Days)).to.equal(2);
  });

  it('converts milliseconds to hours', () => {
    expect(Time.fromMilliseconds(3600 * 2 * 1000, TimeUnit.Hours)).to.equal(2);
  });

  it('converts milliseconds to minutes', () => {
    expect(Time.fromMilliseconds(60 * 2 * 1000, TimeUnit.Minutes)).to.equal(2);
  });

  it('converts milliseconds to seconds', () => {
    expect(Time.fromMilliseconds(2 * 1000, TimeUnit.Seconds)).to.equal(2);
  });

  it('converts milliseconds to milliseconds', () => {
    expect(Time.fromMilliseconds(2, TimeUnit.Milliseconds)).to.equal(2);
  });

  it('converts days to seconds', () => {
    expect(Time.toSeconds(2, TimeUnit.Days)).to.equal(86400 * 2);
  });

  it('converts hours to seconds', () => {
    expect(Time.toSeconds(2, TimeUnit.Hours)).to.equal(3600 * 2);
  });

  it('converts minutes to seconds', () => {
    expect(Time.toSeconds(2, TimeUnit.Minutes)).to.equal(60 * 2);
  });

  it('converts seconds to seconds', () => {
    expect(Time.toSeconds(2, TimeUnit.Seconds)).to.equal(2);
  });

  it('converts milliseconds to seconds', () => {
    expect(Time.toSeconds(2, TimeUnit.Milliseconds)).to.equal(2 / 1000);
  });

  it('converts seconds to days', () => {
    expect(Time.fromSeconds(86400 * 2, TimeUnit.Days)).to.equal(2);
  });

  it('converts seconds to hours', () => {
    expect(Time.fromSeconds(3600 * 2, TimeUnit.Hours)).to.equal(2);
  });

  it('converts seconds to minutes', () => {
    expect(Time.fromSeconds(60 * 2, TimeUnit.Minutes)).to.equal(2);
  });

  it('converts seconds to seconds', () => {
    expect(Time.fromSeconds(2, TimeUnit.Seconds)).to.equal(2);
  });

  it('converts seconds to milliseconds', () => {
    expect(Time.fromSeconds(2 / 1000, TimeUnit.Milliseconds)).to.equal(2);
  });
});
