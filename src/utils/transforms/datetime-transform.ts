import moment from "moment";

export class DateTimeTranformer {
    to(data: string): string {
      return data;
    }
    from(data: string): string | undefined {
      return (data) ?  moment(data).format('YYYY-MM-DD hh:mm:ss'): undefined;
    }
  }