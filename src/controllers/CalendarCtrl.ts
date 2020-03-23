import {Controller, Get} from "@tsed/common";

@Controller("/calendars")
export class CalendarCtrl {
    @Get()
    findAll(): string {
        return "Welcome yo my first api";
    }
}