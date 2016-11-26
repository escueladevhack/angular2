export class Goal {
    goal_id: number;
    sortable_id: number;
    uuid: string;
    name: string;
    description: string;
    seo_name: string;
    created_date: string;
    created_by: number = 1;
    last_modified_date: string;
    last_modified_by: number;
    is_achieved: boolean;
    achieved_date: string;
    due_date: string;

    toString(){
        return JSON.stringify(this);
    }
}