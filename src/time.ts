import { Hours, Milliseconds, Minutes, Seconds } from './conversions';
import { ITimeQuantity, TimeUnit } from './types';

export class Time {
  /**
   * Convert a time value from any supported unit to milliseconds
   * @param value The time value to convert
   * @param units The time value unit type
   */
  public static toMilliseconds(
    value: number,
    units: TimeUnit = TimeUnit.Milliseconds,
  ): number {
    switch (units) {
      case TimeUnit.Days:
        value *= Hours.Per.Day;
      case TimeUnit.Hours:
        value *= Minutes.Per.Hour;
      case TimeUnit.Minutes:
        value *= Seconds.Per.Minute;
      case TimeUnit.Seconds:
        value *= Milliseconds.Per.Second;
      case TimeUnit.Milliseconds:
        return value;
      default:
        throw new Error('Invalid TimeUnit');
    }
  }

  /**
   * Convert a time value from milliseconds to any supported unit
   * @param ms The millisecond time value to convert
   * @param units The time value unit type
   */
  public static fromMilliseconds(ms: number, units: TimeUnit) {
    switch (units) {
      case TimeUnit.Days:
        return ms / Milliseconds.Per.Day;
      case TimeUnit.Hours:
        return ms / Milliseconds.Per.Hour;
      case TimeUnit.Minutes:
        return ms / Milliseconds.Per.Minute;
      case TimeUnit.Seconds:
        return ms / Milliseconds.Per.Second;
      case TimeUnit.Milliseconds:
        return ms;
      default:
        throw new Error('Invalid TimeUnit');
    }
  }

  /**
   * Convert a time value from any supported unit to seconds
   * @param value The time value to convert
   * @param units The time value unit type
   */
  public static toSeconds(
    value: number,
    units: TimeUnit = TimeUnit.Seconds,
  ): number {
    switch (units) {
      case TimeUnit.Days:
        value *= Hours.Per.Day;
      case TimeUnit.Hours:
        value *= Minutes.Per.Hour;
      case TimeUnit.Minutes:
        value *= Seconds.Per.Minute;
      case TimeUnit.Seconds:
        return value;
      case TimeUnit.Milliseconds:
        return value / Milliseconds.Per.Second;
      default:
        throw new Error('Invalid TimeUnit');
    }
  }

  /**
   * Convert a time value from seconds to any supported unit
   * @param s The second time value to convert
   * @param units The time value unit type
   */
  public static fromSeconds(s: number, units: TimeUnit) {
    switch (units) {
      case TimeUnit.Days:
        return s / Seconds.Per.Day;
      case TimeUnit.Hours:
        return s / Seconds.Per.Hour;
      case TimeUnit.Minutes:
        return s / Seconds.Per.Minute;
      case TimeUnit.Seconds:
        return s;
      case TimeUnit.Milliseconds:
        return s * Milliseconds.Per.Second;
      default:
        throw new Error('Invalid TimeUnit');
    }
  }

  /**
   * Convert a time quantity to any supported unit
   * @param quantity The time quantity
   * @param unit The unit type of the time quantity
   */
  public static from(quantity: ITimeQuantity, unit: TimeUnit): number {
    return (
      quantity && this.fromMilliseconds(quantity.getTotalMilliseconds(), unit)
    );
  }

  /**
   * Assert the passed time unit is valid
   * @param unit The unit type to check
   */
  public static assertValid(unit: TimeUnit): true | never {
    if (
      isNaN(unit) ||
      unit > TimeUnit.Days ||
      unit < TimeUnit.Milliseconds ||
      Math.floor(unit) !== unit
    ) {
      throw new Error('Invalid TimeUnit');
    }

    return true;
  }
}
