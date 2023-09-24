import axios from "axios";
import toastr from "toastr";
import useTaskStore from "@/store/task-store";

const API_URL = process.env.API_URL;

class TaskService {
  static async fetchTasks() {
    try {
      const { data } = await axios.get(API_URL + "/tasks");

      const taskStore = useTaskStore();
      taskStore.tasks = data;
    } catch (err) {
      toastr.error("Unable to fetch tasks.");
    }
  }

  static async addTask(task) {
    try {
      const { data } = await axios.post(API_URL + "tasks", { title: task });

      const taskStore = useTaskStore();
      taskStore.addTask(data);

      toastr.success("Task successfully added.");
    } catch (err) {
      toastr.error("Unable to add task. Please try again.");
    }
  }

  static async updateTask(taskId, updatedProperty, updateMessage) {
    try {
      await axios.put(`${API_URL}/tasks/${taskId}`, updatedProperty);

      const taskStore = useTaskStore();
      taskStore.updateTask(taskId, updatedProperty);

      toastr.success(updateMessage);
    } catch (err) {
      toastr.error("Unable to update task. Please try again.");
    }
  }

  static async deleteTask(taskId) {
    try {
      await axios.delete(`${API_URL}/tasks/${taskId}`);

      const taskStore = useTaskStore();
      taskStore.removeTask(taskId);

      toastr.info("Task successfully removed.");
    } catch (err) {
      toastr.error("Unable to delete task. Please try again.");
    }
  }
}

export default TaskService;
