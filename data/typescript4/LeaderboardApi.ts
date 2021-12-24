import axios from 'axios';

export class LeaderboardAPI {
  static async getMemberRatingsApiCall(query: string): Promise<any> {
    try {
      const result = await axios
        .get(query.substring(0, query.length - 1))
        .then((resp) => resp.data);
      console.log(result);
      const data: any = await result;
      if (result.status === 'OK') {
        return {
          status: true,
          code: 200,
          data: data?.result
        };
      } else {
        return {
          status: false,
          code: data.status,
          data: null
        };
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
