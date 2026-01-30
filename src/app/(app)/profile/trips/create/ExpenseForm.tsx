"use client"

import { TripSchema } from "@/lib/schemas/schemas"
import { CreateExpenseDto, ExpenseCategoryEnum } from "@/types/api"
import { Plus, X } from "lucide-react"
import { FieldErrors, UseFormRegister } from "react-hook-form"

const ExpenseForm = ({
    register, 
    expenses,
    addExpense,
    removeExpense,
    errors
}: {
    register: UseFormRegister<TripSchema>,
    expenses: CreateExpenseDto[],
    addExpense: () => void,
    removeExpense: (index:number) => void,
    errors: FieldErrors<TripSchema>
}) => {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Expenses</h3>
            <button type="button" onClick={addExpense} className="p-2 rounded-full hover:bg-gray-100">
                <Plus className="w-5 h-5"/>
            </button>
        </div>
        {expenses?.map((_, index) => {
            return (
                <div key={index} className="flex flex-col gap-2 p-4 border rounded-lg">
                    <div className="flex flex-col gap-2">
                        <label htmlFor={`expenses.${index}.category`}>Category</label>
                        <select {...register(`expenses.${index}.category`)}>
                            {Object.keys(ExpenseCategoryEnum).map((key) => (
                                <option key={key} value={key.toLowerCase()}>{key}</option>
                            ))}
                        </select>
                        {errors.expenses?.[index]?.category && (
                            <p className="text-red-500">
                                {errors.expenses?.[index]?.category.message}
                            </p>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={() => removeExpense(index)}
                            className="p-1 text-red-500 hover:bg-red-50 rounded-full"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor={`expenses.${index}.amount`}>Amount</label>
                        <input 
                        type="number" 
                        step={0.01}
                        {...register(`expenses.${index}.amount`, {
                            valueAsNumber: true
                        })}
                        />
                        {errors.expenses?.[index]?.amount && (
                            <p className="text-red-500">
                                {errors.expenses?.[index]?.amount.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor={`expenses.${index}.description`}>Description</label>
                        <input 
                        type="text" 
                        step={0.01}
                        {...register(`expenses.${index}.description`)}
                        />
                        {errors.expenses?.[index]?.description && (
                            <p className="text-red-500">
                                {errors.expenses?.[index]?.description.message}
                            </p>
                        )}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ExpenseForm