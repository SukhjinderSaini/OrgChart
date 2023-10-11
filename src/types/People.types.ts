export interface People {
  id: String;
  full_name: String;
  job_title: String;
  parent_id: String | null;
  children?: People[] | null | undefined;
}
